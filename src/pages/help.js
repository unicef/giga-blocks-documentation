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
              <p style={{ fontSize: "1.1rem", marginTop: "2rem", marginBottom: "2rem" }}>
                For support, questions, or to get involved with Giga Blocks, please visit our contact page.
              </p>
              <a 
                href="https://giga.global/contact-us/" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  display: "inline-block",
                  padding: "1rem 2rem",
                  backgroundColor: "#393939",
                  color: "#fff",
                  textDecoration: "none",
                  borderRadius: "6px",
                  fontWeight: "500",
                  fontSize: "1.1rem",
                  transition: "background-color 0.3s ease"
                }}
                onMouseOver={(e) => e.target.style.backgroundColor = "#2c2c2c"}
                onMouseOut={(e) => e.target.style.backgroundColor = "#393939"}
              >
                Contact Giga Team
              </a>
            </Col>
          </Row>
        </Container>
      </main>
    </Layout>
  );
}
