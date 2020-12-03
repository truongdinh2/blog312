import React from "react"
import Layout from "./layout";
import 'antd/dist/antd.css';
import { Col, Row } from "antd";
export default function Home({ data }) {
  return (
    <div>
      <Layout >
        <Row>
          <Col offset={8}>
            <h2 className="title">
              xin chao cac ban . minh la anh truong blog
            </h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="mu">
              Ở trận MU vs PSG, HLV Solskjaer sử dụng Fred bên cạnh McTominay ở vị trí tiền vệ trung tâm.
              Fred đã thi đấu năng nổ song anh không giữ được bình tĩnh ở những tình huống vào bóng quyết định.
              Phút 22, ngôi sao người Brazil có một cú húc đầu nhẹ với Paredes,
              trọng tài tham khảo VAR sau đó chỉ rút ra một chiếc thẻ vàng.
              Một tình huống hú vía với NHM đội chủ nhà.
            </div>
          </Col>
        </Row>
        <Row>
          <Col offset={10}>
              <img src="https://static.bongda24h.vn/medias/standard/2020/12/3/fred-bi-chi-trich.jpg" alt="a" />
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="mu">
            Ander Herrera vào sân từ băng ghế dự bị, song đóng góp rất lớn vào chiến 
            thắng của PSG trước MU. Phút 69, 4 phút sau khi được tung vào sân, Herrera
             đã có tình huống sút bóng từ ngoài vòng cấm địa. Bóng đến chân Andou Diallo 
            và cầu thủ này chuyền cho Marquinhos ghi bàn, đưa đội khách dẫn 2-1..
            </div>
          </Col>
        </Row>
      </Layout>
    </div>)
}



