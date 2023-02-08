# Node DB3 Projesi

## Görev 1: Proje Kurulumu

Projeyi forklayın, clone'layın ve sıkça commitlemeyi unutmayın.

## Görev 2: MVP

### Veritabanı

Veritabanı projede kullanılmak üzere sizin için hazırlandı. 
👉 Veriler, `npm run seed` çalıştırılarak herhangi bir zamanda sıfırlanabilir. 👈

Öncelikle SQLite Studio(önerilir) gibi bir araç kullanarak veya VS Code'a SQLite Viewer extension'ını yükleyerek  `data/schemes.db3` dosyasını açın ve `schemes` ve `steps` tablolarındaki verileri inceleyin.

### API

`api/schemes/scheme-router.js` dosyasını açın ve her uç noktanın özelliklerini inceleyin. Bu dosyada herhangi bir değişiklik yapmanıza gerek yoktur.

- `[GET] /api/schemes`
- `[GET] /api/schemes/:scheme_id`
- `[GET] /api/schemes/:scheme_id/steps`
- `[POST] /api/schemes`
- `[POST] /api/schemes/:scheme_id/steps`

### MiddleWare fonksiyonları

Bu dosyanın içindeki talimatları izleyerek middleware işlevlerini `api/schemes/scheme-middleware.js` içinde yazın:

- [ ] `checkSchemeId`
- [ ] `validateScheme`
- [ ] `validateStep`

### Veritabanı Fonksiyonları

Bu dosyanın içindeki talimatları izleyerek db erişim işlevlerini `api/schemes/scheme-model.js` içine yazın:

- [ ] `find`
- [ ] `findById`
- [ ] `findSteps`
- [ ] `add`
- [ ] `addStep`

#### Schemes Şeması

| bölüm       | veri tipi        | metadata                                      |
| :---------- | :--------------- | :-------------------------------------------- |
| scheme_id   | unsigned integer | primary key, auto-increments, generated by db |
| scheme_name | string           | required, unique                              |

#### Steps Şeması

| bölüm        | veri tipi        | metadata                                           |
| :----------- | :--------------- | :------------------------------------------------- |
| step_id      | unsigned integer | primary key, auto-increments, generated by db      |
| scheme_id    | unsigned integer | foreign key referencing scheme.scheme_id, required |
| step_number  | unsigned integer | required                                           |
| instructions | string           | required                                           |

### Notlar

- `npm test` komutuyla testleri bilgisayarınızda çalıştırın.
- Ek modüller oluşturabilirsiniz ancak mevcut dosya veya klasörleri taşımayın veya yeniden adlandırmayın.
- Ek kitaplıklar yüklemek veya ek komut dosyaları eklemek dışında `package.json` dosyanızı değiştirmeyin.
- Çözümünüzde en iyi uygulamaları izlemeniz ve temiz ve profesyonel sonuçlar üretmeniz çok önemlidir.
- Çalışmanızı gözden geçirmek, iyileştirmek ve değerlendirmek için zaman planlayın.
- Çalışmanızda yazım denetimi ve dilbilgisi denetimi de dahil olmak üzere temel profesyonel kontrol işlemleri gerçekleştirin.

## Görev 3: Çoklu Tablo Sorguları

`./data/northwind.db3` dosyasını açın ve aşağıdaki sorguları çalıştırmak için SQLite Studio gibi bir grafik aracı kullanın:

(Aşağıdaki sorguları `./queries.sql` içindeki ilgili yere yazın)

- Tüm ürünler(product) için veritabanındaki ProductName ve CategoryName'i listeleyin. (77 kayıt göstermeli)
- 9 Ağustos 2012 öncesi verilmiş tüm siparişleri(order) için sipariş id'si (Id) ve gönderici şirket adını(CompanyName)'i listeleyin. (429 kayıt göstermeli)
- Id'si 10251 olan siparişte verilen tüm ürünlerin(product) sayısını ve adını listeleyin. ProdcutName'e göre sıralayın. (3 kayıt göstermeli)
- Her sipariş için OrderId, Müşteri'nin adını(Company Name) ve çalışanın soyadını(employee's LastName) listeleyin. Her sütun başlığı doğru bir şekilde isimlendirilmiş olmalı. (16.789 kayıt göstermeli)

## Görev 4: Esnek Görevler

[W3Schools.com](https://www.w3schools.com/Sql/tryit.asp?filename=trysql_select_top) oyun alanında aşağıdaki sorguları çalışın:

- Her gönderici tarafından gönderilen gönderi sayısını bulun.
- Sipariş sayısına göre ölçülen en iyi performans gösteren ilk 5 çalışanı bulun.
- Gelir olarak ölçülen en iyi performans gösteren ilk 5 çalışanı bulun.
- En az gelir getiren kategoriyi bulun.
- En çok siparişi olan müşteri ülkesini bulun.