### 查找
select * from 'baseName. formName' 所有列
select field from 'baseName. formName' 对应列
### 插入

INSERT INTO  'baseName. formName' ( field ) values (field.value)

eg: -- INSERT INTO myworkbench.users (username,password) values ('zzm', '123456')

### 更新

UPDATA 'baseName. formName' SET field=value where id=''

eg: UPDATE myworkbench.users set password='888888' where id=2
eg: UPDATE myworkbench.users set password='888888',username='132465' where id=2

### 删除

DELETE FROM myworkbench.users WHERE id=3