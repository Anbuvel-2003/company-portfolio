import React, { useState } from "react";
import { Col, Row, Statistic } from "antd";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

function Projectreport() {
  const { ref, inView } = useInView({
    triggerOnce: true, // only trigger once when in view
    threshold: 0.3, // 30% visible triggers the animation
  });

  const formatter = (value) =>
    inView ? <CountUp end={value} duration={2} separator="," /> : 0;

  return (
    <div
      ref={ref}
      className="bg-primary w-full !h-[300px] rounded-xl justify-items-center items-center p-4"
    >
      <Row gutter={16} justify="center">
        <Col span={12}>
          <Statistic
            title="Client Satisfaction"
            value={20}
            formatter={formatter}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="No of Projects Completed"
            value={10}
            formatter={formatter}
          />
        </Col>
      </Row>
    </div>
  );
}

export default Projectreport;
