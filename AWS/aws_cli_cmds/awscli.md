# AWS CLI Commands

### Configure AWS access managent key with aws cli
- aws configure

### List all IAM Users on aws cli
- aws  iam list-users --output table OR  aws  iam list-users
```js
OUTPUT - using  aws  iam list-users
{
    "Users": [
        {
            "Path": "/",
            "UserName": "akshay-pawar",
            "UserId": "AIDAVRUVT3YTXSIXDRZJU",
            "Arn": "arn:aws:iam::381492125223:user/akshay-pawar",
            "CreateDate": "2024-02-24T17:18:51+00:00",
            "PasswordLastUsed": "2024-02-24T17:23:58+00:00"
        },
        {
            "Path": "/",
            "UserName": "yogesh-zope",
            "UserId": "AIDAVRUVT3YT6N5GHWNKH",
            "Arn": "arn:aws:iam::381492125223:user/yogesh-zope",
            "CreateDate": "2024-02-24T17:35:29+00:00",
            "PasswordLastUsed": "2024-02-25T04:13:13+00:00"
        }
    ]
}
```
```sql
using aws  iam list-users --output table
--------------------------------------------------------------------------------------------------------------------------------------------------------------
|                                                                          ListUsers                                                                         |
+------------------------------------------------------------------------------------------------------------------------------------------------------------+
||                                                                           Users                                                                          ||
|+----------------------------------------------+----------------------------+----------------------------+-------+------------------------+----------------+|
||                      Arn                     |        CreateDate          |     PasswordLastUsed       | Path  |        UserId          |   UserName     ||
|+----------------------------------------------+----------------------------+----------------------------+-------+------------------------+----------------+|
||  arn:aws:iam::381492125223:user/akshay-pawar |  2024-02-24T17:18:51+00:00 |  2024-02-24T17:23:58+00:00 |  /    |  AIDAVRUVT3YTXSIXDRZJU |  akshay-pawar  ||
||  arn:aws:iam::381492125223:user/yogesh-zope  |  2024-02-24T17:35:29+00:00 |  2024-02-25T04:13:13+00:00 |  /    |  AIDAVRUVT3YT6N5GHWNKH |  yogesh-zope   ||
|+----------------------------------------------+----------------------------+----------------------------+-------+------------------------+----------------+|

```