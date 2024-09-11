## บอร์ดเกมมาสเตอร์ (Board Game Master) ![github](Board-Game-Master)
* อุปกรณ์สำหรับสร้างเกมกระดาน (ยังเป็นแบบจำลอง)
* สร้างมาในวิชา AP โปรแกรมมิ่ง กับนักเรียนอีกคนที่โรงเรียนพอยต์เกรย์เซคอนแดรี่ (Point Grey Secondary)
* สร้างด้วย Unity Game Engine

![boardgame]()

## ของขวัญวันเกิด
  * โปรแกรมที่สร้างมาให้เพื่อน หรือครอบครัว
  * สร้างแอนิเมชั่นเล็กๆเกี่ยวกับเค้กให้แม่, และแอนิเมชั่นเกี่ยวกับดวงดาวในท้องฟ้าให้พ่อ
  * สี่เหลี่ยมสีดำมีไว้บังข้อมูลส่วนตัว

![bdays]()

## อุปกรณ์ดูคำตอบฟอร์มจากไซต์ Wordpress
* เป็นอุปกรณ์สำหรับตรวจดูว่ามีคำตอบที่คล้ายกัน จากการกรอกฟอร์ม บนเว็บไซต์ของครอบครัวหรือไม่ (ตอนนี้ยังไม่เปิดให้ดู, สร้างด้วย Wordpress)
* อุปกรณ์นี้อ่านคำตอบฟอร์มจากเว็บไซต์ในรูปแบบไฟล์ CSV, แล้วแจ้งมาว่าคำตอบคู่ไหนต่างกันมากถึงเพียงแค่สามอย่าง

![formscan]()

## คำตอบเกม-24 ![github](Game24-Solutions)
* แสดงทุกคำตอบที่เป็นไปได้สำหรับ[เกม-24](https://en.wikipedia.org/wiki/24_(puzzle)) 
* ในเวอร์ชันนี้, ผู้เล่นได้รับตัวเลขสี่ตัวจาก 0-9 แล้วต้องหาวิธีสร้างนิพจน์ที่มีค่าเท่ากับ 24 จากแค่สี่ตัวเลขนี้ และเครื่องหมาย +, -, *, /
* คำตอบเหล่านี้ถูกสร้างด้วย[ภาษาโปรแกรมแฮสเคิล (Haskell)](https://www.haskell.org/)
* โปรแกรมนี้เจอคำตอบที่น่าตกใจหลายคำตอบ
  ถ้าคุณอยากท้าทายตนเอง คุณสามารถลองหาคำตอบเหล่านี้บ้าง :)
  ![QuadsSols]()

## เซียร์พินสกี (Sierpinski)
* แอนิเมชันที่แสดงการวาด[สามเหลี่ยมเซียร์พินสกี](https://en.wikipedia.org/wiki/Sierpi%C5%84ski_triangle)
  สำหรับ[การแข่งขันการโปรแกรมเชิงฟังก์ชัน](https://homepages.inf.ed.ac.uk/wadler/fp-competition-2019/)
  ของมหาวิทยาลัยเอดินเบอระ ในปี 2019
* โค้ดที่เขียนส่งไป สามารถดัดแปลงทำให้เส้นดูเว้า หรือนูนได้

  ![sierpinski]()

  ![sierpinski-vids]()

## ทีแพตเทิน-ลูอา (TPatterns-lua) ![github](TPatterns-lua)
* คือ library สำหรับ[ภาษาโปรแกรมลูอา (Lua)](https://www.lua.org/) เพื่อการใช้ pattern matching บน tables ของลูอา
* สามารถหา module ภาษาลูอานี้ได้บน [LuaRocks](https://luarocks.org/modules/Thanakrit-Anutrakulchai/tpatterns)!
```lua
    -- Here is a short example from the Github page:

    -- The matchers can be used as switch statements e.g.
    match (value) {
        case(5) - ... ,
        case('hello') - ...
    }

    -- But their strength is in using the binded variables. e.g.
    local append;
    append = match_all_nomt { 
        case( empty_list, var'ys' ) - 'ys',
        case({head = var'x', tail = var'xs'}, var'ys') - 
            function(t) return cons(t.x, append(t.xs, t.ys)) end 
    }

    --  defines a function `append` that takes two lists of the form 
    --    { head = value, tail = restOfList },
    --    or {} (for the empty list), 
    --  and concatenates them together.

```

## สเก็ลลี่ซีวเวอร์แอดเวนเจอร์ (Scaly Sewer Adventures)
* เกมสั้นๆ สร้างด้วย GameMaker Lite v8 สำหรับวิชาอินโฟเทคโนโลยี (infotech.) ที่โรงเรียนเมาท์บูเชอรีเซคอนแดรี่ (Mount Boucherie Secondary)
* เกี่ยวกับกิ้งก่าที่ต้องหนีจากบ้านเก็บของที่เต็มไปด้วยแมลงวัน และหนูที่หน้ากลัว
* แหล่งที่มาของเพลงที่เล่นอยู่ในเกมคือ
  "March of the Spoons" Kevin MacLeod (incompetech.com)
  Licensed under Creative Commons: By Attribution 4.0 License
  http://creativecommons.org/licenses/by/4.0/.

![sewers]()

## เว็บไซต์นี้ ![github](Thanakrit-Anutrakulchai.github.io)
* คือสิ่งที่คุณกำลังมองอยู่
* ขณะนี้ กำลังโฮสต์ผ่าน Github Pages และสร้างด้วย Vite, React, กับ TypeScript
* บางหน้าถูกเขียนด้วยมาร์กดาวน์ โดยใช้ปลั๊กอิน
  [react-markdown](https://github.com/remarkjs/react-markdown)
