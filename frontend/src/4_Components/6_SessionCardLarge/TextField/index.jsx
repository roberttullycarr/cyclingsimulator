import styled from "styled-components";

const Wrapper = styled.div`
  width: 89.8%;
  margin-top: 1.875vw;
`

const Title = styled.h1`
  line-height: 5.20vw;
  text-align:center;
  vertical-align: middle;
  background-color: ${props => props.theme.ELGreen};
  color: ${props => props.theme.ELWhite};
`

const MiddleText = styled.p`

`

const TextField = () => {
    return (
        <Wrapper>
            <Title>Voedingsadvies tijdens de klim</Title>
            <MiddleText>carr, je bent in staat om de Mont Ventoux starting from Bedoin (21,5 km) te beklimmen in 83 minuten.
                Gedurende de volledige rit zal je 1426 kcal verbruiken. Het spreekt voor zich dat je deze energie ook zal moeten aanvullen. Tijdens een inspanning is je maag evenwel de beperkende factor.Je maag kan 1426 kcal op 83 minuten niet verwerken, maar wel ongeveer 103 gram koolhydraten, wat overeenkomt met 414 kcal.
                Indien je toch meer zou eten, loop je het risico op maagdarmproblemen, iets wat je zeker niet wil tijdens deze rit.
                De kunst bestaat erin om met een licht gevoel, maar toch voldoende energie de beklimming te verwezelijken. Zo haal je het maximum uit je prestatie.
                Allereerst heb je vocht nodig. Je zweet immers en dit verloren vocht en zouten moeten aangevuld worden.

                #WERT!
                Een dorstlesser bevat ongeveer 45gram koolhydraten per drinkbus van 75cl, dus in jouw situatie heb je al 6,2 gram koolhydraten dankzij je dorstlesser.
                Je hebt echter 103 gram koolhydraten nodig, dus we zullen nog 4,1 gram koolhydraten moeten voorzien onder de vorm van vaste voeding.
                30 gram koolhydraten komt overeen met 2 sneden peperkoek, 1 energiereep, 2 gels (kijk op de verpakking), 2 mueslirepen, 1 pakje Sultana koeken, 1 doosje rozijntjes, 1 Grany koek, 1 banaan,...
                Kies iets uit waar jij je goed bij voelt en dat je hebt uitgetest tijdens een training.
                In jouw geval is het aan te raden om bijvoorbeeld 0,3 sneden peperkoek of 0,3 gels mee te nemen, naast je dorstlesser.
                Je dient van bij de start je energie goed aan te vullen, zodat je een hongerklop in de laatste kilometers voorkomt.
            </MiddleText>
            <Title>Mee te nemen tijdens de beklimming: #WERT!
                0,3 sneetjes peperkoek ofwel 0,3 energie-gels. Check zeker eens op voorhand de verpakking.
            </Title>
        </Wrapper>
    )}

export default TextField