# git 命令

## 代码迁移
需要代码迁移时，需要保存历史记录。可以在原项目下执行：
```
git push --mirror + url
```

## 创建分支

```
git branch dev
```

## 查看分支

```
git branch
```

## 切换分支

```
git checkout dev
```
推荐

## 定位到某个节点
```
git revert commit_id
```
注意

## 回滚
```
git reset --hard commit_id
```
不推荐，会删除 commit 历史记录。--hard 定位到 HEAD。