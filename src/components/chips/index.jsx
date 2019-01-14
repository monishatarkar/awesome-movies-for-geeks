import React, { Component } from 'react'
import './styles.scss'


class Chips extends Component {

    state = {
        chips: [
            "All", "Movie", "Series", "Short Movies", "Documentaries"
        ],
        selected: 0
    }

    getChips() {
        let chipsList = [];
        for (let i = 0; i < this.state.chips.length; i++) {
            if (this.state.selected === i) {
                chipsList.push(<li class="select">{this.state.chips[i]}</li>)
            } else {
                chipsList.push(<li onClick={()=> {this.setChip(i)}}>{this.state.chips[i]}</li>)
            }
        }

        return chipsList
    }

    setChip(id) {
        this.setState({
            selected: id
        });
    }

    render() {
        return (
            <div class="chips-layout">
                <ul>
                    { this.getChips() }
                </ul>
            </div>
        )
    }
}

export default Chips