# Programming_Visual_Illusion
2024

目前正在實驗 Müller-Lyer illusion，常見的基本款如下：

![image](https://github.com/user-attachments/assets/9dbec216-f0a6-48e1-84de-6eeed0060fca)
(儘管這兩條線段實際上是等長的，
人們通常會感知到帶有向外擴張元素的線段比帶有向內的元素之線段要長)

我們推論主要原因如下:

1.視覺參照框架： Müller-Lyer 錯覺可能與人類在視覺處理過程中對深度和空間的參照框架有關。
我們的視覺系統會根據日常生活中的經驗去推斷物體的深度和距離。
向內的箭頭（<——>）被認為是在向內的空間邊界中，因此讓我們感覺這條線段比實際更短；
而向外的箭頭（>——<）被認為是在向外延伸的空間中，給人以更長的感覺。

2.透視效應和深度線索： 一些心理學家認為，Müller-Lyer 錯覺的原因之一是透視效應。
帶有向外指的箭頭類似於建築物的外角，看起來像是向外延伸，這種透視線索讓我們感知到線段似乎更長；
而帶有向內指的箭頭則類似於建築物的內角，看起來像是向內收縮，讓線段看起來更短。

![Examples-of-the-stimulus-figures-used-in-this-study-a-Ponzo-illusion-and-b](https://github.com/user-attachments/assets/bb904c9b-8c12-4d6b-9611-305376eb5f25)


3. 錯覺中的上下文效應： 我們對線段的長度感知在很大程度上取決於線段末端的上下文信息。
這意味著箭頭方向對我們視覺系統的影響是由於這些箭頭給我們的視覺環境添加了某種空間參考，
而我們的大腦則會嘗試根據這些參考線索進行解釋和預測。

4. 神經加工： 從神經科學的角度來看，Müller-Lyer 錯覺的發生是由於我們的大腦在處理視覺信息時，
會自動地嘗試進行深度解釋。神經系統中負責形狀和邊界處理的區域會根據這些箭頭的方向作出不同的推論，
導致我們對線段長度產生錯誤的感知。

![ezgif-4-700075fd2a](https://github.com/user-attachments/assets/e1de72c4-0b01-4ddd-872c-5109abfe4f4d)
(環狀橫躺的 Müller-Lyer Illusion。p5.js自製)


![ezgif-4-05f681be10](https://github.com/user-attachments/assets/30984a7a-43e9-417b-95a3-92c607e13939)
(環狀垂直向圓心的 Müller-Lyer Illusion。p5.js自製)


同時因為對比度較低，若仔細凝視靜止圖中心的Cross，也會有Troxler效應的產生
(凝視上方的動態圖則沒有)：
![螢幕擷取畫面 2024-10-25 144902](https://github.com/user-attachments/assets/9040b204-2663-4f9c-b094-d2068873dff3)


********************************************************************

結合人眼四周對顏色的敏感性較差，目前正在研究一種Optical Wavy Lines Illusion
，花了不少時間仍無法完全復刻（請縮小看）：
![Original Wavy Line](https://github.com/user-attachments/assets/47b2524f-e399-42db-8d94-b3b4de28e569)
(原圖有陰影，像一種類自然畫面，像石頭與草皮)
![螢幕擷取畫面 2024-10-26 235225](https://github.com/user-attachments/assets/3ed6102b-d1c4-4235-aabb-a6cf2b8fabb8)

其原理是透過視覺邊緣比較淺色的長方形（隱隱呈現一些紋路），以擾亂顏色感知，
讓人腦將淺灰腦補成綠色，而產生而外的綠色彎線錯覺...
![螢幕擷取畫面 2024-11-01 021104](https://github.com/user-attachments/assets/145fbce5-bb8a-4835-ae23-e4020cdba4a2)
(如圖淺白線標出的部份)

！目前嘗試的進度如下（20241031）：
![螢幕擷取畫面 2024-11-01 021301](https://github.com/user-attachments/assets/c72f9d49-0ff5-46cc-8346-08fb1e6bc7f7)



