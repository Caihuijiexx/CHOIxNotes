# v-if、v-show、v-html

#### v-if : 

会调用addIfCondition方法，生成vnode的时候会忽略对应节点，render的时候就不会渲染；

#### v-show : 

会生成vnode，render的时候也会渲染成真实节点，只是在render过程中会在节点的属性中修改show属性值，也就是常说的display；

#### v-html : 

会先移除节点下的所有节点，调用html方法，通过addProp添加innerHTML属性，归根结底还是设置innerHTML为v-html的值

所以在使用v-html的时候可能会存在XSS攻击的漏洞，被植入可执行的脚本

