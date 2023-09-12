import { View } from "react-native";
import SafeArea from "../../../components/safeArea";
import RegularText from "../../../components/texts";
import Colors from "../../../theme/colors";
import global from "../../../theme/global";
import Size from "../../../theme/typography";
import Button from "../../../components/button";
import { useState } from "react";
import * as Print from 'expo-print';
import { shareAsync } from 'expo-sharing';
import BackButton from "../../../components/backButton";
import style from "../style";
import TestInfo from "./testInfo";

export default function Generated({ route, navigation }) {
    const { data, subject } = route.params;

    const generateHTMLTemplate = (questions) => {
        let html = `
            <html>
                <head>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
                    <style>
                        body {
                            text-align: center;
                            background-color: #0A3180;
                            color: #FFF;
                            font-family: Helvetica Neue;
                        }
                        .question {
                            margin-bottom: 20px;
                            background-color: #55AC68;
                            padding: 10px;
                            font-size: 18px;
                            font-weight: bold;
                        }
                        .answer {
                            font-size: 16px;
                            margin-bottom: 10px;
                        }
                    </style>
                </head>
                <body>
                    <h1 style="font-size: 30px; font-weight: normal;">Prova de ${subject.subject}</h1>
        `;

        questions.forEach((question, index) => {
            html += `
                <div class="question">
                    <p>Pergunta ${index + 1}:</p>
                    <p>${question.question}</p>
                    <ul style="list-style-type: none; padding: 0;">
            `;

            question.answers.forEach((answer, ansIndex) => {
                html += `
                    <li class="answer">
                        <input type="radio" ${answer.correct ? 'checked' : ''} disabled> ${answer.answer}
                    </li>
                `;
            });

            html += `
                    </ul>
                </div>
            `;
        });

        html += `
                </body>
            </html>
        `;

        return html;
    };

    const goToHome = () => {

        navigation.navigate("Home", { userData: userJSON });
    }

    const htmlTemplate = generateHTMLTemplate(data);

    const printToFile = async () => {
        const { uri } = await Print.printToFileAsync({ html: htmlTemplate });
        await shareAsync(uri, { UTI: '.pdf', mimeType: 'application/pdf' });
    };

    const visualizerTest = () => {
        navigation.navigate("TestVisualizer", { data: data, subject: subject });
    }

    const TestData = [
        {
            label: 'Assunto',
            value: subject.theme
        },
        {
            label: 'Matéria',
            value: subject.subject
        },
        {
            label: 'Perguntas',
            value: subject.questionsNumber
        }
    ]

    return (
        <SafeArea>
            <View style={global.container}>
                <View style={style.container}>
                    <RegularText
                        weight="SemiBold"
                        color={Colors.primary}
                        fontSize={Size.title.medium}
                        content={'Prova gerada'}
                        align="center"
                    />
                    <BackButton color={Colors.primary} iconColor={Colors.primary} action={() => navigation.goBack()} close={true} />
                </View>
                <View style={global.containerContent}>
                    <View style={style.containerVisualizer}>
                        <RegularText
                            weight="SemiBold"
                            color={Colors.darkGrey}
                            fontSize={Size.text.medium}
                            content={`Informações`}
                        />
                        <TestInfo TestData={TestData} />
                    </View>
                    <View style={style.containerVisualizer}>
                        <RegularText
                            weight="SemiBold"
                            color={Colors.darkGrey}
                            fontSize={Size.text.medium}
                            content={`Pré-visualização da prova`}
                            align={'center'}
                        />
                        <Button
                            action={() => visualizerTest()}
                            text="Visualizar"
                            color={Colors.primary}
                        />
                    </View>
                    <View style={style.containerButtons}>
                        <Button
                            action={printToFile}
                            text="Download PDF"
                            color={Colors.primary}
                        />
                        <Button
                            action={printToFile}
                            text="Ver Todas Provas"
                            color={Colors.inputBackground}
                            dark={true}
                        />
                    </View>
                </View>
            </View>
        </SafeArea>
    )
}
