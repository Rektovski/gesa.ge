import "../design/HomeStyle.css";
import {Col, Row} from "react-bootstrap";
import {homeList} from "../helper/homeList";
import gesaLogo from "../assets/gesaLogo.png";

export default function Home() {

    return (
        <>
            <div className={'Home'}>
                <Row className={"HomeLogoAndText"}>
                    <Col sm={12} md={6} lg={6} xl={6} xxl={6}>
                        <div className={'HomeLogoSpace'}>
                            <img className={'HomeLogo'} src={gesaLogo} alt={"gesaLogo"}/>
                        </div>
                    </Col>
                    <Col className={'HomeHeader'}>
                        საქართველოს ევროპისმცოდნეთა ასოციაცია
                    </Col>
                </Row>
                <div className={'HomeBody'}>
                    <Row>
                        {
                            homeList.map((item, id) => (
                                <Col className={'HomeCol'} key={id} sm={12} md={6} lg={6} xl={6} xxl={6}>
                                    <div className={'HomeName'}>{item.name}</div>
                                    <div className={'HomeDesc'}>{item.desc}</div>
                                </Col>
                            ))
                        }
                    </Row>
                </div>
            </div>
        </>
    )
}