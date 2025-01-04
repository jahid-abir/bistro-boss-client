import Cover from "../../Shared/Cover";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import orderImg from '../../assets/shop/banner2.jpg'
import useMenu from "../../hook/useMenu";
import OrderTab from "./OrderTab";
import { useParams } from "react-router-dom";
import { useState } from "react";

const Order = () => {
    const categories = ['salad','pizza','soup','dessert','drink']
   
    const {category = 'salad'} = useParams()

    const initialIndex = categories.indexOf(category)
    const [tabIndex,setTabIndex] = useState(initialIndex)
    const {menu,loading} = useMenu()
    if(loading){
        return <span className="loading loading-dots loading-md"></span>
    }
    const salad = menu.filter(item => item.category === 'salad')
    const dessert = menu.filter(item => item.category === 'dessert')
    const pizza = menu.filter(item => item.category === 'pizza')
    const soup = menu.filter(item => item.category === 'soup')
    const drinks = menu.filter(item => item.category === 'drinks')
    return (
        <div>
            <Cover img={orderImg} title={'our shop'} />
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soups</Tab>
                    <Tab>Desserts</Tab>
                    <Tab>Drinks</Tab>
                </TabList>

                <TabPanel>
                    <OrderTab items={salad}/>
                </TabPanel>
                <TabPanel>
                <OrderTab items={pizza}/>
                </TabPanel>
                <TabPanel>
                <OrderTab items={soup}/>
                </TabPanel>
                <TabPanel>
                <OrderTab items={dessert}/>
                </TabPanel>
                <TabPanel>
                <OrderTab items={drinks}/>
                </TabPanel>
            </Tabs>
        </div>

    );
};

export default Order;