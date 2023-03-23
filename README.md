<h1 align="center"><strong>Nodejs+Express</strong></h1>

Node.js ถูกสร้างขึ้นมาเพื่อทำงานฝั่ง Server เป็นหลักมีข้อดีคือ ผู้พัฒนาเว็บสามารถความคุมการทำงานของเว็บทั้งฝั่ง Frontend และ Backend ได้โดยใช้ Javascript เพียงภาษาเดียว 

<h3 align="center"><strong>Asynchronous</strong></h3>

**Nodejs** จะทำงานแบบ *Non-Blocking/Asynchronous* คือ การทำงานที่สามารถจะสลับไปทำงานอื่นได้ เช่น สามารถทำงาน A และ B ไปพร้อมๆกันได้โดยไม่ต้องรอให้อีกงานเสร็จ
***

**คุณสมบัติของ Node.js**
* ใช้ Google V8 Engine ในการ Complie Javascript
* ทำงานแบบ Single-Thread(1 Thread: 1 Process)
* ทำงานแบบ Non-Block I/O, Event Loop
***
<h3 align="center"><strong>Event Loop คืออะไร</strong></h3>

* เป็นรูปแบบการทำงานแบบ *Asynchronous* เพื่อแก้ไขปัญหา Blocking I/O
* ใช้สำหรับวัน *Loop* เพื่อตรวจสอบงานที่จัดลำดับใน *Thread* ว่ามีงานใน *Thread* ให้ทำหรือไม่?
* เมื่อเจองานที่เป็น Blocking I/O จะส่งงานดังกล่าวไปยัง Background (Thread Pool: Thread ย่อย) ทันทีและไม่ต้องรอผลลลัพธ์ จากนั้นก็วนลูปใหม่เพื่อมองหาหรือรับงานถัดไป
***

**ตัวอย่าง Event Loop**

> มีผู้ใช้สามคนส่ง Request เข้ามาต่างกัน
* คนแรกส่ง Read Data -คนแรก จะถูกส่งไปส่งยัง Background เพื่อรอการทำงาน
* คนที่สองส่ง Login -คนที่สองก็จะส่ง Login เข้ามาททำการได้เลย โดยที่ไม่ต้องรอให้คนแรกทำเสร็จก่อน
* คนที่สามส่ง Request... -คนที่สามก็จะส่ง Request เข้ามาได้เลย โดยที่ไม่ต้องรอให้ คนแรกกับคนที่สอง ทำงานจนเสร็จก่อน

> ไม่ต้องให้คนใดคนถึงทำงานจนเสร็จก่อนถึงจะทำ Request อื่นได้ และแต่ละ Request ก็จะถูก Response ออกไปให้แต่ละคน
***
<h3 align="center"><strong>CallBack</strong></h3>

> อาศัย CallBack Function คือ ฟังก์ชั่นที่จะถูกเรียกใช้งานเมื่ออีกฟังก์ชั่นทำงานเสร็จ

start----------> Downloading-----------> Complete
***

**CallBack Hell**
> การใช้ CallBack อาจก่อให้เกิดปัญหาที่เรียกว่า CallBack Hell ซึ่งก็คือการนำฟังก์ชั่น CallBack มาซ้อนกันไปเรื่อยๆ แล้วส่งผลให้เกิดความสับสนกับการเช็คค่าลำดับการทำงานเลยเกิดวิธีแก้ปัญหาดัวกล่าวโดยการใช้ **"Promise"**
***

<h3 align="center"><strong>Promise</strong></h3>

> Promise ถูกนำมาใช้งานเกี่ยวกับการทำงานแบบ Asynchronous คือ ให้รอในระหว่างที่ผลลัพธ์ยังไม่เกิดขึ้นใช้กับงานที่มีลักษณะการหน่วงเวลา (Delay) หรืองานที่ต้องทำเบื้องหลัง แล้วจะมีผลเกิดขึ้นในเวลาต่อมา และถูกนำมาใช้แก้ปัญหา *CallBack Hell*

**Promise**
* pending เป็นสถานะเริ่มต้นของ Promise
ถ้าทำงานสำเร็จจะเป็น resolve ถ้าล้มเหลวจะเป็น reject
* resolve/fulfilled ดป็นพารามิเตอร์ของ callback ซึ่งใช้
กำหนดสถานะหากทำงาน "สำเร็จ"
* reject เป็นพารามิเตอร์ของ callback ซึ่งกำหนดสถานะหากทำงาน "ผิดหลาด"

**Method then(), catch(), finally()**
* then() ใช้งานร่วมกับสถานะ resolve หรือเมื่อ Promise สำงานสำเร็จ
* catch() ฬช้วานร่วมกับสถานะ reject หรือเมื่อ Promise ทำงานผิดพลาด
* finally() ไม่ว่าผลลัพธ์ของสถานะจะเป็นอย่างไรให้ทำงานส่วนนนี้ได้เลย
***

<h3 align="center"><strong>Module</strong></h3>

> Module คือ ไฟล์ที่จัดเก็บโค้ดของ *JavaScript* ซึ่งประกอบด้วยการทำงานต่างๆไ ได้แก่ ตัวแปร ฟังก์ชั่นม Class, Object หรืออื่นๆ เพื่อนำไปใช้งานในส่วนต่างๆของโปรเจค
> ในปัจจุบันมีผู้สร้าง *Module* สำหรับสนับสนุนแบะใช้บริการอยู่หลายแบบเพื่ออำนวยความสะดวกเกี่ยวกับงานแต่ละด้าน เช่น จัดการ Request, จัดการ Database, Image, DataTime, Validate เป็นต้น

## Webserver With Node.js

![web with node](https://user-images.githubusercontent.com/106058972/226942775-28c16b06-12fc-4806-bd44-e9757abd6fa0.png)

## Routing

![routing](https://user-images.githubusercontent.com/106058972/227142974-ee669b34-3763-4cee-8a35-4214518864de.png)

> กำหนดเส้นทางรับส่งข้อมูลหรือ URL ในการอนุญาตให้เข้าถึงข้อมูลรวมไปถึงตรวกสอบ URL Request เพื่อจะได้กำหนดรูปแบบการทำงาน
***

<h3 align="center"><strong>Express Framework</strong></h3>

Express.j เป็น Framework ของ JavaScript ที่ใช้ทำงานร่วมกับ Node.js เพื่อสนับสนุนการทำงานของ Web Server ให้มีความง่ายและสะดวกสบายยิ่งขึ้น เนื่องจากมี Feature หลายๆอย่างที่น่าสนใจ เช่น Routing การจัดการ Request, Resonse และ Middleware เป็นต้น

## Express & Routing 

* get() เป็นเมธอดสำหรับกำหนดการทำงานตามเส้นทางที่ระบุเมื่อ request ถูกส่งเข้ามาเช่น การส่งค่ามาพร้อมกับ URL เป็นต้น
* callback fucntion คือ สำหรับกำหนดรูปแบบการตอบสนองที่เกิดขึ้นเพื่อส่ง request เข้ามาในเส้นทางดังกล่าว

<h3 align="center"><strong>Class Router</strong></h3>

การทำระบบที่มีความซับซ้อนมากขึ้น มีเส้นทาง(route) มากขึ้น การเขียนระบบเส้นทาง(routing) แบบเดิมอาจจะไม่ตอบโจทย์จึงต้องมีการจัดการระบบ Routing โดยใช้ Class Router

## Router Parameter

> การกำหนดพารามิเตอร์หรือ ตัวแปรส่งไปพร้อมกับ Path โดยใช้เครื่องหมาย : (colon) กำกับไว้ด้านหน้าชื่อพารามิเตอร์ในแต่ละ Path สามารถกำหนดพารามิเตอร์ได้มากกว่า 1 ตัว เช่น

* product/:id
* product/:category/:id

> การรับค่าพารามิเตอร์

* request.params['ชื่อพารามิเตอร์']หรือ
* request.params.ชื่อพารามิเตอร์

## Redirect

> การทำ Routing ยังสามารถนำมาใช้ในการเปลี่ยนเส้นทางการแสดงผลไปยัง Path อื่นๆ ได้โดยใช้คำสั่ง

* response.redirect(path)
* response.redirect(URL)
