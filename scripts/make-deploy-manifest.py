#!/usr/bin/env python3
"""Create a bounded SHA-256 manifest for an nginx static-site build."""
import hashlib,json,os,pathlib,re,sys

assert len(sys.argv)==5
root=pathlib.Path(sys.argv[1]).resolve();source=sys.argv[2]
assert root.is_dir() and re.fullmatch(r'[0-9a-f]{40}',source)
assert sys.argv[3].isdigit() and sys.argv[4].isdigit()
files=[];total=0
for directory,dirs,names in os.walk(root,followlinks=False):
 for name in dirs+names:
  p=pathlib.Path(directory)/name
  assert not p.is_symlink()
 for name in names:
  p=pathlib.Path(directory)/name;rel=p.relative_to(root).as_posix()
  assert p.is_file() and not any(part.startswith('.') for part in pathlib.PurePosixPath(rel).parts)
  assert rel not in {'DEPLOY-MANIFEST.json','oldwebsite.zip','Archive.zip'}
  assert not rel.endswith(('.zip','.tar','.gz','.sql','.bak'))
  size=p.stat().st_size;total+=size
  assert size<=20_000_000 and total<=40_000_000 and len(files)<2000
  files.append({'path':rel,'size':size,'sha256':hashlib.sha256(p.read_bytes()).hexdigest()})
assert any(r['path']=='index.html' for r in files)
print(json.dumps({'schema':1,'source_commit':source,'run_id':sys.argv[3],'run_attempt':sys.argv[4],'files':sorted(files,key=lambda r:r['path'])},separators=(',',':')))
