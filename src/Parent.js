import './App.css';
import { Component } from "react";
import React from "react";
import Child1 from "./Blog";
import Child2 from "./components/About";
import { Layout } from "antd";
import Link from './elements/Link';

const { Header, Content } = Layout;

class Parent extends Component {
    state = {
        komponen1: true,
        komponen2: false
    }
    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     alert(`Component Updates! prevState child1: ${prevState.komponen1} -- prevState child2: ${prevState.komponen2}`)
    // }
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return window.confirm('Anda yakin?');
    }
    ubahkomponen1 = () => {
        this.setState((state) => {
            return { 
                komponen1: true,
                komponen2: false }
        })
    }
    ubahkomponen2 = () => {
        this.setState((state) => {
            return { 
                komponen2: true,
                komponen1: false }
        })
    }
    render() {
        return (
            <div>
                <Layout className="layout">
                    <Header>
                        <div className="logo" style={{ float: "left", marginLeft: '15px', fontSize: "1.3rem", color: "white" }}>
                            Kelompok 19
                    </div>
                        <div style={{ float: "right" }}>
                            <Link background="rgba(255, 255, 255, 0.0)" color="#ffffff" onClick={this.ubahkomponen1}>Blog</Link>
                            <Link background="rgba(255, 255, 255, 0.0)" color="#ffffff" onClick={this.ubahkomponen2}>About</Link>
                        </div>
                    </Header>
                    <Content style={{ padding: '0 50px' }}>
                        <div className="Components">
                            {this.state.komponen1 ? <Child1 bgcolor="#ededed" /> : ''}
                            {this.state.komponen2 ? <Child2 background="#ffffff" /> : ''}
                        </div>
                    </Content>
                </Layout>
                {/* {this.state.komponen1 ? <Child1 bgcolor="#ededed" /> : ''}
                <button onClick={this.ubahkomponen1}>{this.state.komponen1 ? 'HIDE' : 'SHOW'} child 1!</button>
                <br />
                {this.state.komponen2 ? <Child2 /> : ''}
                <button onClick={this.ubahkomponen2}>{this.state.komponen2 ? 'HIDE' : 'SHOW'} child 2!</button> */}
            </div>
        );
    }
}
export default Parent;