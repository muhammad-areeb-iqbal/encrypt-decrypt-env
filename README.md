# Encryption/Decryption env files and shared them securly
https://www.npmjs.com/package/encyrpt-decrypt-env



### Introduction

This package used to encryption and decryption the .env file, so that you can share the encrypted .env file between the team securly.

https://www.npmjs.com/package/encyrpt-decrypt-env

### Installation
```
npm i encyrpt-decrypt-env
```
## Usage:

### Encryption .env file
**1.** Run command in the root project where your .env file exists

```
npx encrypt-env
```
It will create a file ".env.encrypted".
Note:- It will return "key" and "iv". For decryption you need to pass the key and iv.

Output:
```
Key:  r5ez4
iv:  ruft4
.env.encrypted is created successfully.
```
Note:- Please save the "key" and "iv". It will require to decrypt the .env file.



**2.** If you want to use **custom key** and **custom iv** for encryption,
```
npx encrypt-env --key="yourstring" --iv="yourstring"
```

output:
```
Key:  yourstring
iv:  yourstring
.env.encrypted is created successfully.
```

**3.** If you want to encrypt any **specific env file like ".env.example"**
```
npx encrypt-env --key="yourstring" --iv="yourstring" --env=".env.example"
```
ouput:
```
Key:  yourstring
iv:  yourstring
.env.example.encrypted is created successfully.
```

### Decrypt .env encrypted files
**1.** It will decrypt the .env.decrypted file and create the .env file
```
npx decrypt-env --key="yourstring" --iv="yourstring"
```

**2.** Decrypt any **specific file like .env.example.decrypted**
```
npx decrypt-env --key="yourstring" --iv="yourstring" --env=".env.example"
```