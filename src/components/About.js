import React, { Component } from 'react'
import '../App.css'
import Select from '../elements/Select';
import Link from '../elements/Link';

function Square(props){
    return(
        <div>
            <div className="gambar">
                <img className="gambar" src= {props.gambar}/>
            </div>
            <h4>{props.nama}</h4>
            <p>{props.nim}</p>
            <Select background="#fafafa">
                <option>Kelas</option>
                <option>Kelas A</option>
                <option>Kelas B</option>
            </Select>
        </div>
    );
}

export default class Card extends Component {
    state = {
        nama1: "Jonathan Imago Dei G.",
        nama2: "Novazira A. F",
        bg: "#ffffff",
        bgText: true
    }

    ubahBackground = () => {
        this.setState((state) => {
            this.setState((state) => { 
                if (state.bg === "#ffffff") {
                    return {bg : "#fffdd0", bgText : false}
                } else {
                    return { bg: "#ffffff", bgText : true}                 
                }
            })
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        alert(`Background Updated! From ${prevState.bgText ? 'White' : 'Cream'} to be ${this.state.bgText ? 'White' : 'Cream'}`)
    }

    render() {
        const background={
            backgroundColor : this.props.bgcolor
        }
        return (
            <div className="wrapper">
                <br/>
                <div className="User-info" style={{background: this.state.bg}}>
                    <Square nama={this.state.nama1} nim="21120117130054" gambar="https://www.pngitem.com/pimgs/m/78-786293_1240-x-1240-0-avatar-profile-icon-png.png"/>
                </div>
                <div className="User-info" style={{background: this.state.bg}}>
                    <Square nama={this.state.nama2} nim="21120117130047" gambar="https://cdn.iconscout.com/icon/premium/png-64-thumb/hijab-woman-3-774644.png"/>
                </div>
                <br/><br/>
                <Link background={this.state.bg} color="#000000" onClick={this.ubahBackground}>{this.state.bgText ? 'Cream' : 'White'}</Link>
                <br />
            </div>
        )
    }
}