import React from "react";
import style from "./styles.css";
import PostComponent from "./PostComponent";
import { Col, Row } from "react-bootstrap";
import Link from "next/link";

const RightPost = async ({ data }) => {
  return (
    <div style={{ backgroundColor: "white" }} className="p-3">
      <div
        className="d-flex align-items-center justify-content-between mb-1"
        style={{ borderBottom: "3px solid #F2F5F8" }}
      >
        <h2
          style={{
            fontSize: "18px",
            fontWeight: "bold",
          }}
        >
          Tin đăng nổi bật
        </h2>
        <Link href="/tin-noi-bat" className="text-decoration-none">
          <span style={{ fontSize: "13px", color: "gray" }}>Xem tất cả</span>
        </Link>
      </div>
      <div className="mb-2">
        <Row>
          {data?.map((item, i) => (
            <Col key={i} lg={12} md={6} sm={6} xs={6}>
              <PostComponent data={item} />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default RightPost;
