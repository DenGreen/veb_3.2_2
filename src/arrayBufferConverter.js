export function getBuffer(value) {
      const buffer = new ArrayBuffer(value.length * 2);
      const bufferView = new Uint16Array(buffer);
      for (let i = 0; i < value.length; i++) {
        bufferView[i] = value.charCodeAt(i);
      }
      return buffer;
}

export class ArrayBufferConverter{
    load(value){
        const bufferConv = getBuffer(value);
        return new Uint16Array(bufferConv);
    }

    toString(value){
      let bufferViewCode = '';
      for (let i = 0; i < value.length; i++) {
        bufferViewCode += String.fromCodePoint(value[i]);
      }
      return bufferViewCode;
    }
}

let arrayBufferConverter = new ArrayBufferConverter();
let bufferConv = arrayBufferConverter.load('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
console.log(arrayBufferConverter.toString(bufferConv));