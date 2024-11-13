#!/bin/bash

# cd /sdcard/acode/otfo.cc/
# bash deploy.sh

# 设置远端仓库
# git remote set-url origin https://github.com/cnzixn/otfo.cc.git

# git remote add origin https://github.com/cnzixn/otfo.cc.git

# 切换到主分支，构建站点并提交更改
git checkout main
jekyll build
git add .
git commit -m "Update main"
git push origin main --force

# 切换到 gh-pages 分支，清空内容
git checkout gh-pages
git rm -rf .

# 将 _site 文件夹内容复制到 gh-pages 分支根目录
git checkout main -- CNAME
git checkout main -- .gitignore
git checkout main -- _site
git checkout main -- search.json
cp -r ./_site ./bny
cp -r ./bny/bny/s .
# cp ./bny/index.html .
cp ./bny/404.html .
rm -rf ./bny/bny

# 提交并推送到 gh-pages 分支
git add .
git reset deploy.sh
git commit -m "Deploy gh-pages"
git push origin gh-pages --force

# 返回到主分支
git checkout main
rm -rf ./bny
git add .
git commit -m "Update gh-pages"

