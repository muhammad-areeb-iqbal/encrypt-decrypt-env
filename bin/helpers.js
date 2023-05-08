const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

function test(){
	//console.log("test");
	return "test";
}

function test1(){
	return "test1";
}

function createKey(key){
	return crypto
  .createHash('sha512')
  .update(key)
  .digest('hex')
  .substring(0, 32);
}

function createIV(iv){
	return crypto
  .createHash('sha512')
  .update(iv)
  .digest('hex')
  .substring(0, 16);
}

function randomKey(){
	return r = (Math.random() + 1).toString(36).substring(7);
}

function encrypt(plainString, AesKey, AesIV) {
    const cipher = crypto.createCipheriv("aes-256-cbc", AesKey, AesIV);
    let encrypted = Buffer.concat([cipher.update(Buffer.from(plainString, "utf8")), cipher.final()]);
    return encrypted.toString("base64");
}

function decrypt(base64String, AesKey, AesIV) {
    const decipher = crypto.createDecipheriv("aes-256-cbc", AesKey, AesIV);
    const deciphered = Buffer.concat([decipher.update(Buffer.from(base64String, "base64")), decipher.final()]);
    return deciphered.toString("utf8");
}

function filePath(filename){
	return path.join(process.cwd(), filename);
}

function encryptFile(filename, key, iv){
	
	fs.readFile(filePath(filename), {encoding: 'utf-8'}, function(err,data){
		if (!err) {
			let encryptedData = encrypt(data, createKey(key), createIV(iv));
			
			fs.writeFile(filePath(filename+".encrypted"), encryptedData, function (err) {
			  if (err) throw err;
				console.log("Key: ", key);
				console.log("iv: ", iv);
				console.log(filename+".encrypted is created successfully.");
			});
		} else {
			console.log(err);
		}
	});
}

function decryptFile(filename, key, iv){
	
	let file = filename+".encrypted";
	fs.readFile(filePath(file), {encoding: 'utf-8'}, function(err,data){
		if (!err) {
			let decryptedData = decrypt(data, createKey(key), createIV(iv))
			fs.writeFile(filePath(filename), decryptedData, function (err) {
			  if (err) throw err;
				console.log(filename+" is created successfully.");
			});
			
		} else {
			console.log(err);
		}
	});
}

module.exports = {
	createKey,
	randomKey,
	createIV,
	encrypt,
	encryptFile,
	decryptFile
}