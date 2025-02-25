import {useEffect, useState} from 'react';
import {Statistic, StatisticProps} from 'antd';
import CountUp from "react-countup";


function StatisticNumbers({title, value, p}: { title: string, value: number, p: string }) {
    const [isVisible, setIsVisible] = useState(false); // 记录组件是否进入视口
    const formatter: StatisticProps['formatter'] = (value) => (
        <>
            <CountUp end={value as number} separator=","/>{p}
        </>
    );
    useEffect(() => {
        // 创建 IntersectionObserver 实例，监听元素是否进入视口
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true); // 进入视口时，更新 isVisible 为 true
                }
            },
            {
                threshold: 0.5, // 50% 进入视口时触发
            }
        );

        // 获取组件的 DOM 元素
        const element = document.getElementById('numbers-component');
        if (element) {
            observer.observe(element); // 开始观察
        }

        return () => {
            if (element) {
                observer.unobserve(element); // 清理观察
            }
        };
    }, []);

    return (
        <div id="numbers-component">
            {isVisible && (
                <>
                    <Statistic title={title} value={value} formatter={formatter}/>
                </>
            )}
        </div>
    );
}

export default StatisticNumbers;
