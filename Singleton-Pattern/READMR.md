# Singleton Pattern 單例模式

> Singleton Pattern 是一種常用的設計模式，它可以確保在一個應用程式中，有且只有一個實例化的物件，並提供一個全域唯一的訪問點。

## 優點

- 確保在應用程式中只存在一個實例化的物件，減少資源消耗，提高應用程式的效能。
- 提供一個全域唯一的訪問點，方便對單例物件進行控制和訪問。
- 可以避免不必要的對物件進行重複建立和資源浪費。

##  缺點
- 隱藏了物件的依賴關係，使程式設計師難以進行測試和修改，並使代碼結構變得複雜。
- 單例物件存在全域範圍，容易被其他程式碼誤用和污染。
- 單例物件的生命週期難以控制，容易導致內存洩漏和泄露。

## 在實際應用 Singleton Pattern 時，需要注意以下幾點：

- 確保 Singleton 物件在整個應用程式中是唯一的，不允許通過其他方式進行實例化。
- 注意 Singleton 物件的生命週期，防止出現內存泄漏和洩漏等問題。
- 注意 Singleton 物件的線程安全性，確保在多線程環境下能夠正常運作。


## 範例程式碼

```javascript
class MySingleton {
  constructor() {
    if (!MySingleton.instance) {
      MySingleton.instance = this
    }
    return MySingleton.instance
  }

  sayHello() {
    console.log('Hello, I am a Singleton object.')
  }
}

const singleton1 = new MySingleton()
const singleton2 = new MySingleton()
// singleton1 === singleton2 true
```