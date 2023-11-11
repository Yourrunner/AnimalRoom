entrytip.forEach(item => {
    const callback = function (mutationsList, observer) {
        for (let mutation of mutationsList) {
            if (mutation.type === 'attributes' && mutation.attributeName === 'style') {
                const displayValue = $(mutation.target).css('display');
                if (displayValue === 'none') {
                    whoosh.play();
                    // 在这里执行你的隐藏逻辑
                } else {
                    ding.play();
                    // 在这里执行你的显示逻辑
                }
            }
        }
    };

    // 创建一个 MutationObserver 实例并传入回调函数
    const observer = new MutationObserver(callback);

    // 选择要观察的目标节点
    const targetNode = item;

    // 配置观察选项：只观察属性变化
    const config = {attributes: true};

    // 开始观察目标节点
    observer.observe(targetNode, config);

    // 之后，你可以停止观察
    // observer.disconnect();

})