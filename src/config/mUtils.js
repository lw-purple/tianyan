
 /**
 * 储存localStorage
 * 
 * @param {any} name 
 * @param {string} value 
 * @returns 
 */
export const setStore = (name,value) =>{
    if(!name) return;
    if(typeof value !== 'string'){
        value = JSON.stringify(value);
    }
    window.localStorage.setItem(name,value);
}

 /**
 * 获取localStorge
 * 
 * @param {any} name 
 * @returns 
 */
export const getStore = name =>{
    if(!name) return;
    return window.localStorage.getItem(name);
}

 /**
 * 删除localStorge
 * 
 * @param {any} name 
 * @returns 
 */
export const removeStore = name =>{
    if(!name) return;
    window.localStorage.removeItem(name);
}

 /**
 * 获取style样式
 * 
 * @param {any} element 
 * @param {any} attr 
 * @param {string} [NumberMode='int'] 
 */
export const getStyle = (element,attr,NumberMode = 'int') =>{
    let target;
    //scrollTop 获取方式不同，没有它不属于style，而且只有document.body才能用
    if(attr === 'scrollTop'){
        target = element.scrollTop;
    }else if(element.currentStyle){
        target = element.currentStyle[attr];
        // 针对ie
    }else{
        target = document.defaultView.getComputedStyle(element,null)[attr]
    }
    // 在获取opacity时需要获取小数 parseFloat
    return NumberMode == 'float' ? parseFloat(target) : parseInt(target);
}

export const loadMore = (element,callback) =>{
    let windowHeight = window.screen.height;
    let height;
    let setTop;
    let paddingBottom;
    let marginBottom;
    let requestFram;
    let oldScrollTop;
    document.body.addEventListener('scroll',() => {
        loadMore();
    },false) // false指在冒泡阶段执行
    // 运动开始时获取元素高度 和offseTop, padding , margin
    element.addEventListener('touchstart',()=>{
        height = element.offsetHeight;
        setTop = element.offsetTop;
        paddingBottom =getStyle(element,'paddingBottom');
        marginBottom = getStyle(element,'marginBottom');
    },{passive:true})
    // 运动过程中保持监听 scrollTop 的值判断是否到达底部
    element.addEventListener('touchmove',()=>{
        loadMore()
    },{passive:true});

    // 运动结束时判断是否有惯性运动，惯性运动结束判断是否到达底部
    element.addEventListener('touchend',()=>{
        oldScrollTop=document.body.scrollTop;
        moveEnd();
    },{passive:true})

    const moveEnd = () =>{
        requestFram = requestAnimationFrame(() => {
            if(document.body.scrollTop !=  oldScrollTop){
                oldScrollTop = document.body.scrollTop;
                loadMore();
                moveEnd();
            }else{
                cancelAnimationFrame(requestFram);
                //为了防止鼠标抬起时已经渲染好数据从而导致重获取数据，应该重新获取dom高度
            	height = element.offsetHeight;
                loadMore();
            }
        })
    }
     const loadMore = () => {
        if (document.body.scrollTop + windowHeight >= height + setTop + paddingBottom + marginBottom) {
            callback();
        }
    }
}