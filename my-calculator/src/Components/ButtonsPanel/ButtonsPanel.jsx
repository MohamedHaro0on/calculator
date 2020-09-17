import React from 'react'
import Button from '../Button/Button'
import ClassNames from './ButtonsPanel.module.scss';

function ButtonsPanel({ clickHandler }) {
    const Buttons = [
        { buttonName: "÷", orange: true },
        { buttonName: "%" },
        { buttonName: "+/-" },
        { buttonName: "AC" },
        { buttonName: "X", orange: true },
        { buttonName: "9" },
        { buttonName: "8" },
        { buttonName: "7" },
        { buttonName: "-", orange: true },
        { buttonName: "6" },
        { buttonName: "5" },
        { buttonName: "4" },
        { buttonName: "+", orange: true },
        { buttonName: "3" },
        { buttonName: "2" },
        { buttonName: "1" },
        { buttonName: "=", orange: true },
        { buttonName: "." },
        { buttonName: "0", wide: true },
    ]
    return (
        <div className={ClassNames.ButtonsPanel}>
            {Buttons.map((button, index) => {
                return (
                    <Button
                        key={index}
                        orange={button.orange}
                        wide={button.wide}
                        clickHandler={clickHandler}
                        name={button.buttonName}
                    />
                )
            })}
        </div>
    )
}

export default ButtonsPanel
