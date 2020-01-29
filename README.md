# React Redux Hooks + OMDB  api

OMDB film apisi kullanılarak, react hooks ve redux ile film search uygulaması. Uygulama içerisinde her bir conponent bağlı bulunduğu ana component ile yönetilmektedir.

#### Proje Kurulumu;
Öncelikle proje kurulumu, development, build, test adımları için;
* npm paketinin yüklenmesi
```npm install```
* proje start
```npm run start```
* proje test
```npm run test```


#### State management yapısı;
React, daha önceki versiyonların da (16 öncesi) state management yapısın da daha fazla state ve daha fazla react component extend etmek zorunda kalıyordul. React hooks ile state management yapısı kolaylaşmış ve bileşenleri de buna göre azalmıştır. 

Aşağıda bulunan hooks ile yapılmış OMDB datası ile çekilmiş bir örnek mevcuttur. Bu örnek ile redux reducer ile hooks arasındaki bağlantıyı da görmüş olacağız. 

Öncelile hooks içerisinde kullanılmak üzere selector seçimi ve dispatch seçimi için bir örnek verelim

## Özet Kullanım;
### useSelector()
Redux üzerinden yapılan bir değişikliği sağmaya yarar. Dolayısıyla Redux içerisinde verilecek bir bilgi için bu parametreye ihtiaç duyulur.
```javascript
import { useSelector } from  'react-redux';
// yeni FilmList function tanımı 
const  FilmList  = () => {
// Redux içerisinde bulunacak olan reducer FilmList datası
const  FilmList  =  useSelector(state  =>  state.todos.FilmList);
}
```
### useDispatch()
Yine Redux üzerinde bulunan type ve benzeri parametrelere göre döngünün oluşumu sağlar. Bu anlam da mesela bir fetch işleminde de hangi type ve payload'ın işleme alınacağı sağlanır.
```javascript
import { useDispatch } from  'react-redux';
// Yeni FilmList function
const  FilmList  = () => {
// action için dispatch kullanımı
const  dispatch  =  useDispatch();
// Form data modelinin oluşturulması
const formFieldsObject = {
// Form fatasının payload'a gönderilmesi
dispatch({type:'GET_FETCHED',payload:formFieldsObject});
}
```
### useEffect()
Daha önce React lifecyle ‘nda class'lar ve component'ler sırası ile işlenirdi. Böylelikle lifecyle bozulmaması için componentWillmound,componentDidMount gibi. React hooks ile bu methodlar tekr bir işlevsellik üzerine oluşmaktadır. Aşağıdaki örnekte de useEffect kullanılarak fetch işlemi sağlanmıştır 
```javascript
import React, { useEffect } from 'react';
// Yeni FilmList function
const  FilmList  = () => {
// Data isteğinde (fetch edilecek) bulunacak olan useEffect function
useEffect(() =>
    fetch("url")
      .then(res => res.json())
      .then(data)
      // control is loading for fetch
  )
bu alan da dikkat edilmesi gereken konu şu, daha nce Wilmount rander öncesi oluşmakta ve akabininde de Didmount oluşmaktaydı. Bunlar yerine sadece useEffect kullanılacağı için bir isloading durumu oluşmak zorundadur. Data başarılı bir şekilde get oldu ise buna göre isloading durumunun da güncellenmesi gerekmektedir. 
}
```
### useState()
Yine react hooks ile gelen yeni özelliklerden ve durum değişikliklerini yapmaya yarakan bir özelliktir. Daha önceki react versiyonun da (16 öncesi) Bunu this.state durum değişiklikleri ile sağlıyorduk. Bu konuda ise bir input'un change olma durumunu gözlemleyebiliriz. 
```javascript
import React, { useState } from 'react';
// Yeni FilmSearch function
const  FilmSearch  = () => {
// input value değerlerinin tanımı
const [inputValue, setInputValue] = useState('');
// input değişikliğini izlemek için set edilen value değeri. Bu kısımda da handleInput değişikliği izlenmektedir.
<input type="text" onChange={handleInput} value={inputValue} />
// Input'a ait onchange değişikliği sonucunda setInputValue ile value değerinin set edilmesi 
const handleInput = (e) => {
    setInputValue(e.target.value);
}
}
```

React Hooks yapısı kısaca bu şekildedir. React Hooks'un yapısı ve Redux ile kullanımı için github link'i üzerinden ulaşabilirsiniz.
[ Github ]: https://www.mozilla.org



