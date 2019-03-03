import ToastComponent from './toast.vue'

const Toast1 = {};

// 注册Toast
Toast1.install = function (Vue) {
    // 生成一个Vue的子类
    // 同时这个子类也就是组件
    const ToastConstructor = Vue.extend(ToastComponent)
    // 生成一个该子类的实例
    const instance = new ToastConstructor();

    // 将这个实例挂载在我创建的div上
    // 并将此div加入全局挂载点内部
    instance.$mount(document.createElement('div'))
    document.body.appendChild(instance.$el)

    // 通过Vue的原型注册一个方法
    // 让所有实例共享这个方法 
    Vue.prototype.$toast = (msg, duration = 2000) => {
        instance.message = msg;
        instance.show = true;

        setTimeout(() => {
            instance.show = false;
        }, duration);
    }
}

export default Toast1