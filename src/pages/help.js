import React from "react";
import Layout from "@theme/Layout";
import { Container, Row, Col } from "reactstrap";

export default function HelpPage() {
  return (
    <Layout title={`Help`} description="Help Page">
      <main>
        <Container>
          <Row style={{ marginTop: "4rem", marginLeft: "0.3rem" }}>
            <Col md={12}>
              <h1>Need help?</h1>
            </Col>
          </Row>
        </Container>
      </main>
    </Layout>
  );
}
