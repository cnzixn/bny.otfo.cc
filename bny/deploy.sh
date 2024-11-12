#!/bin/bash

# cd /sdcard/acode/bny.otfo.cc/
# bash deploy.sh

# 切换到主分支，构建站点并提交更改
git checkout main
jekyll build
git add .
git commit -m "Update"
git push origin main --force

# 切换到 gh-pages 分支，清空内容
git checkout gh-pages
git rm -rf .

# 将 _site 文件夹内容复制到 gh-pages 分支根目录
git checkout main -- _site
git checkout main -- search.json
cp -r ./_site/s .
mv _site bny
mv ./bny/index.html .
mv ./bny/404.html .

# 提交并推送到 gh-pages 分支
git add .
git reset deploy.sh
git commit -m "Deploy"
git push origin gh-pages --force

# 返回到主分支
git checkout main





# jekyll build

# jekyll serve

# git remote add origin https://github.com/cnzixn/bny.otfo.cc.git
