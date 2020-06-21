import React, { Component } from 'react'
import Question from "./Question.js"
import categoriesStyle from './Categories.module.css'
import Score from "./Score.js"

class CategoryList extends Component {
    state = {
        categories: [
            {
                id: 1,
                title: "Basic Facts",
                answered: [false, false, false, false, false],
                correct: [false, false, false, false, false],
                on: [false, false, false, false, false],
                questions: ["Which organ is affected by hepatitis B?", 
                "What does “hepatitis” mean?", 
                "What is the difference between “acute” and “chronic” hepatitis B?", 
                "What is one symptom of acute hepatitis B?", 
                "What type of immune cell helps destroy infected cells?"],
                answers: ["Liver", 
                "Inflammation of the liver",
                "Chronic hepatitis is characterized by 6 months without clearance",
                "Loss of appetite, nausea, vomiting, body aches, mild fever, dark urine, and jaundice",
                "Cytotoxic (Killer) T cells"]
            },
            {
                id: 2,
                title: "Disease Pathology",
                answered: [false, false, false, false, false],
                correct: [false, false, false, false, false],
                on: [false, false, false, false, false],
                questions: ["Which virus causes hepatitis B?", 
                "Is there a cure to hepatitis B?", 
                "Does HBV always cause symptoms?", 
                "What is cirrhosis?", 
                "Cirrhosis increases the risk of _________?"],
                answers: [
                    "HBV",
                    "Not yet",
                    "No",
                    "Scarring of the liver",
                    "Liver cancer"
                ]
            },
            {
                id: 3,
                title: "Epidemiology",
                answered: [false, false, false, false, false],
                correct: [false, false, false, false, false],
                on: [false, false, false, false, false],
                questions: ["How is HBV spread?", 
                "How many people worldwide are chronically infected with HBV?", 
                "HBV can’t be spread... A) from mom to newborn B) by sharing needles C) by breastfeeding", 
                "Without appropriate treatment, what fraction of hepatitis B patients will die?", 
                "True or False: Hepatitis B is prevalent in China, Uganda, Argentina and Vietnam."],
                answers: [
                    "BBS: Blood, Birth, Sex",
                    "240 million",
                    "C) By breastfeeding",
                    "1 in 4",
                    "False, Hep B is not prevalent in Argentina."
                ]
            },
            {
                id: 4,
                title: "Action", 
                answered: [false, false, false, false, false],
                correct: [false, false, false, false, false],
                on: [false, false, false, false, false],
                questions: ["How many shots is the hepatitis B vaccine?",
                "What is the name of the school clubs that raise awareness about hepatitis B?",
                "True or False: Hepatitis B testing involves both a blood and urine test.",
                "The hepatitis B vaccine is known as an “______” vaccine.",
                "Hepatitis B treatment involves check-ups. How often should the patient get an ultrasound?"],
                answers: [
                    "2 or 3",
                    "Team HBV",
                    "False, only a blood test is required",
                    "Anti-cancer",
                    "Every 6 months"
                ]
            },
            {
                id: 5,
                title: "Potpourri",
                answered: [false, false, false, false, false],
                correct: [false, false, false, false, false],
                on: [false, false, false, false, false],
                questions: ["True or False? Hepatitis B is a Sexually Transmitted Infection.",
                "Inflammation is an _______ response.",
                "What is one role of the liver?",
                "What is a potential side effect of current hepatitis B treatments?",
                "Those with _________ are most in need of treatment for hepatitis B."],
                answers: [
                    "True",
                    "Immune",
                    "Metabolism, detoxification, nutrient storage, or fighting infection",
                    "Headaches, fatigue, hair loss, depression",
                    "Cirrhosis"
                ]
            }
        ],
        score: 0
    }

    toggle = (category, index, answered, correct) => {
        this.setState({
            score: correct ? this.state.score + 100*(index + 1) : this.state.score,
            categories: this.state.categories.map(curr => {
                if (curr === category && curr.answered[index] === false) {
                    curr.on[index] = !curr.on[index]
                    curr.answered[index] = answered
                    curr.correct[index] = correct
                }
                return curr;
            })
        })
        console.log(answered)
    }

    render () {
        return (
            <div className = {categoriesStyle.header}>
                {this.state.categories.map(category => (
                    <div key = {category.id} className = {categoriesStyle.category}>
                        <h2 className = {categoriesStyle.title}>{category.title}</h2>
                        <Question index = {0} category = {category} toggle = {this.toggle}/>
                        <Question index = {1} category = {category} toggle = {this.toggle}/>
                        <Question index = {2} category = {category} toggle = {this.toggle}/>
                        <Question index = {3} category = {category} toggle = {this.toggle}/>
                        <Question index = {4} category = {category} toggle = {this.toggle}/>
                    </div>
                ))}
                <Score score = {this.state.score} />
            </div>
            
        )
    }
    
}

export default CategoryList;
