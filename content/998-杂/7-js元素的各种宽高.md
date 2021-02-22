# js元素的各种宽高

![img](https://pic4.zhimg.com/80/v2-eddb1d2eaad3d8f5fde2d236ba1b167f_1440w.jpg)

## 一、属性

### **1.只读属性**

所谓的只读属性指的是DOM节点的固有属性，该属性只能通过js去获取而不能通过js去设置，而且获取的值是只有数字并不带单位的（px,em等），如下：

#### 1）clientWidth和clientHeight

该属性指的是元素的可视部分宽度和高度，即**padding+content**，如果没有滚动条，即为元素设定的高度和宽度**(padding+content)**，如果出现滚动条，滚动条会遮盖元素的宽高，那么该属性就是其**本来宽高减去滚动条的宽高**



#### 2）offsetWidth和offsetHeight

这一对属性指的是元素的**border+padding+content**的宽度和高度，该属性和其内部的内容是否超出元素大小无关，只和本来设定的border以及width和height有关，和**clientWidth以及clientHeight相比，多了设定的边框border的宽度和高度**



#### 3）clientTop和clientLeft

这一对属性是用来读取元素的**border**的宽度和高度的



#### 4）offsetLeft和offsetTop

说到这对属性就需要说下**offsetParent**，所谓offsetParent指的是**当前元素的离自己最近的具有定位的（position:absolute或者position：relative）父级元素**

**（不仅仅指的是直接父级元素，只要是它的父元素都可以）**，该父级元素就是当前元素的offsetParent，如果从该元素向上寻找，找不到这样一个父级元素，

那么当前元素的offsetParent就是**body**元素。

**offsetLeft**和**offsetTop**：当前元素，**相对于其offsetParent左边距离和上边距离**，即当前元素的border到包含它的offsetParent的border的距离。



#### 5）scrollHeight和scrollWidth

这两个属性指的是当元素内部的内容**超出其宽度和高度的时候，元素内部内容的实际宽度和高度**，

需要注意的是，当元素其中内容**没有超过其高度或者宽度的时候，该属性是取不到的**。



### **2.可读可写属性**

所谓的可读可写属性指的是不仅能通过js获取该属性的值，还能够通过js为该属性赋值。

#### 1） scrollTop和scrollLeft

这对属性是可读写的，指的是当元素其中的内容超出其宽高的时候，**元素被卷起的高度和宽度**。

该属性还可以**通过赋值内容自动滚动到某个位置**



#### 2）obj.style.*属性

在读的时候，**返回的值常常是带有单位的(如px)**，

同时，对于这种方式，它**只能够获取到该元素的行内样式**，而并**不能获取到该元素最终计算好的样式**，

这就是在读取属性值得时候和以上只读属性的区别，

要获取计算好的样式，请使用**obj.currentstyle（IE）**和**getComputedStyle(IE之外的浏览器)**。

另一方面，**这些属性能够被赋值**，js运动的原理就是通过不断修改这些属性的值而达到其位置改变的，

需要注意的是，给这些属性赋值的时候**需要带单位的要带上单位**，否则不生效。



## 二、event对象

#### 1）clientX和clientY

这对属性是当事件发生时，鼠标**点击位置相对于浏览器（可视区）的坐标**，

即**浏览器左上角坐标的（0,0）**，该属性以浏览器左上角坐标为原点，计算鼠标点击位置距离其左上角的位置，

**不管浏览器窗口大小如何变化，都不会影响点击位置的坐标**。



#### 2）screenX和screenY

事件发生时，**鼠标相对于屏幕的坐标**，

以设备屏幕的左上角为原点，事件发生时鼠标点击的地方即为该点的screenX和screenY值， 

可以看到尽管浏览器窗口被缩到很小，但是坐标值却很大，因为是**相对于屏幕坐标而不是浏览器的坐标**。



#### 3）offsetX和offsetY

这一对属性是指当事件发生时，**鼠标点击位置相对于该事件源的位置**，

即点击该div，以该div左上角为原点来计算鼠标点击位置的坐标，

需要注意的是，IE，chrome，opera都支持该属性**，唯独Firefox不支持该属性**，

Firefox中与此属性相对应的概念是，**event.layerX**和**event.layerY**，

所以需要兼容浏览器时，获取鼠标点击位置相对于事件源的坐标的

**兼容写法为**      **var disX = event.offsetX||event.layerX**



#### 4)  pageX和pageY

该属性是事件发生时**鼠标点击位置相对于页面的位置**，

通常**浏览器窗口没有出现滚动条时**，该属性**和event.clientX及event.clientY是等价的**，

但是当**浏览器出现滚动条的时候**，**pageX通常会大于clientX**，因为页面还存在被卷起来的部分的宽度和高度，

