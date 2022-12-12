import "../design/AboutUSStyle.css";
import {Col, Row} from "react-bootstrap";
import about1 from "../assets/about/about1.jpg"
import about2 from "../assets/about/about2.jpg"
import about3 from "../assets/about/about3.jpg"

export default function AboutUs() {
    return (
        <>
            <div className={'AboutUs'}>
                <div className={'AboutHeader'}>
                    ჩვენს შესახებ
                </div>

                <Row className={'d-flex align-items-center'}>
                    <Col sm={12} md={6} lg={6} xl={6} xxl={6} className={'AboutText'}>
                        საქართველოს ევროპისმცოდნეთა ასოციაცია, დაფუძნდა 2019 წლის 30 სექტემბერს 5-სტუდენტის მიერ და მას,
                        შემდეგ, აქტიურად ხორციელდება სხვადასხვა პროექტები ევროინტეგრაციის საკითხებზე.
                    </Col>
                    <Col sm={12} md={6} lg={6} xl={6} xxl={6}>
                        <div className={'AboutLogoSpace'}>
                            <img className={'AboutLogo'} src={about1} alt={'aboutLogo'}/>
                        </div>
                    </Col>
                </Row>

                <Row className={'d-flex align-items-center'}>
                    <Col sm={12} md={6} lg={6} xl={6} xxl={6}>
                        <div className={'AboutLogoSpace'}>
                            <img className={'AboutLogo'} src={about2} alt={'aboutLogo'}/>
                        </div>
                    </Col>
                    <Col sm={12} md={6} lg={6} xl={6} xxl={6} className={'AboutText'}>
                        აქტიურად ვართ ჩართული ფორმალური და არაფორმალური განათლების ხელშეწყობის საქმეში, ასევე გვყავს
                        50-მდე აქტიური წევრი, მათ შორის 30 სეას ლოკალური ელჩი სტუდენტი და ასევე გლობალური ელჩები
                        სხვადასხვა ქვეყანაში.
                    </Col>
                </Row>

                <Row className={'d-flex align-items-center'}>
                    <Col sm={12} md={6} lg={6} xl={6} xxl={6} className={'AboutText'}>
                        ასევე აქტიურად ვახორციელებთ პროექტებს პარტნიორ ორგანიზაციებთან ერთად და ვეძებთ ახალ პარტნიორებსაც,
                        ვფიქრობთ ერთად საინტერესო საქმიანობის განხორციელების შესაძლებლობა გვექნება.
                    </Col>
                    <Col sm={12} md={6} lg={6} xl={6} xxl={6}>
                        <div className={'AboutLogoSpace'}>
                            <img className={'AboutLogo'} src={about3} alt={'aboutLogo'}/>
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    )
}