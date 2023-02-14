import "./index.scss";
import React, { memo, useEffect, useState } from "react";
import { Avatar, Tag, Badge, Card } from "antd";
import {
  PhoneFilled,
  MailFilled,
  GithubFilled,
  TrophyFilled,
  CheckCircleFilled,
  ScheduleFilled,
  EnvironmentFilled,
  HomeFilled,
  CrownFilled,
} from "@ant-design/icons";
import { RESUME } from "../../constants/resume";

function Resume() {
  return (
    <div className="Resume">
      <div className="resume-content">
        <div className="basic-info">
          <div className="profile">
            <div className="name">{RESUME.profile.name}</div>
            {RESUME.avatar.src && (
              <Avatar src={RESUME.avatar.src} className="avatar" />
            )}
            <div className="profile-list">
              <div className="mobile">
                <PhoneFilled style={{ opacity: 0.85 }} />
                {RESUME.profile.mobile}
              </div>
              <div className="email">
                <MailFilled style={{ opacity: 0.85 }} />
                {RESUME.profile.email}
              </div>
              <div className="job">
                <HomeFilled style={{ opacity: 0.85 }} />
                <span>{RESUME.profile.positionTitle}</span>
              </div>
              <div className="year">
                <ScheduleFilled style={{ opacity: 0.85 }} />
                <span>{RESUME.profile.workExpYear}</span>
              </div>
              <div className="github">
                <GithubFilled style={{ opacity: 0.85 }} />
                <span
                  aria-hidden="true"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    window.open(RESUME.profile.github);
                  }}
                >
                  {RESUME.profile.github}
                </span>
              </div>
            </div>
          </div>
          {RESUME.educationList?.length ? (
            <Badge.Ribbon
              text={<div className="section-title">教育背景</div>}
              placement="start"
            >
              <Card className="section section-education">
                {RESUME.educationList.map((education) => {
                  const [start, end] = education.edu_time;
                  return (
                    <div key={education.major} className="education-item">
                      <div>
                        <span>
                          <b>{education.school}</b>
                          <span style={{ marginLeft: "8px" }}>
                            {education.major && <span>{education.major}</span>}
                            {education.academic_degree && (
                              <span
                                className="sub-info"
                                style={{ marginLeft: "4px" }}
                              >
                                ({education.academic_degree})
                              </span>
                            )}
                          </span>
                        </span>
                        <span className="sub-info" style={{ float: "right" }}>
                          {start}
                          {end}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </Card>
            </Badge.Ribbon>
          ) : null}
          {RESUME.educationList?.length ? (
            <Badge.Ribbon
              text={<div className="section-title">自我介绍</div>}
              placement="start"
            >
              <Card className="section section-aboutme">
                {RESUME.aboutme.map((desc: string) => (
                  <div key={`${desc}`}>{desc}</div>
                ))}
              </Card>
            </Badge.Ribbon>
          ) : null}
          {RESUME.awardList?.length ? (
            <Badge.Ribbon
              text={<div className="section-title">更多信息</div>}
              placement="start"
            >
              <Card className="section section-award">
                {RESUME.awardList.map((award) => (
                  <div key={award.award_info}>
                    <TrophyFilled
                      style={{ color: "#ffc107", marginRight: "8px" }}
                    />
                    <span className="info-name">{award.award_info}</span>
                    {award.award_time && (
                      <span className="sub-info award-time">
                        ({award.award_time})
                      </span>
                    )}
                  </div>
                ))}
              </Card>
            </Badge.Ribbon>
          ) : null}
          {RESUME.workExpList?.length ? (
            <Badge.Ribbon
              text={<div className="section-title">工作经历</div>}
              placement="start"
            >
              <Card className="section section-project">
                {RESUME.workExpList.map((work) => {
                  const start = work.work_time[0];
                  const end = work.work_time[1] ? work.work_time[1] : null;
                  return work ? (
                    <div className="section-item" key={work.company_name}>
                      <div className="section-info">
                        <b className="info-name">
                          {work.company_name}
                          <span className="sub-info">
                            {work.department_name}
                          </span>
                        </b>
                        <span className="info-time">
                          {start}
                          {end}
                        </span>
                      </div>
                      {work.work_desc.map((desc) => (
                        <div className="work-description" key="desc">
                          {desc}
                        </div>
                      ))}
                    </div>
                  ) : null;
                })}
              </Card>
            </Badge.Ribbon>
          ) : null}
          {RESUME.projectList?.length ? (
            <Badge.Ribbon
              text={<div className="section-title">项目经历</div>}
              placement="start"
            >
              <Card className="section section-project">
                {RESUME.projectList.map((project) => (
                  <div className="section-item" key={project.project_name}>
                    <div className="section-info">
                      <b className="info-name">
                        {project.project_name}
                        <span className="info-time">
                          {project.project_time}
                        </span>
                      </b>
                      {project.project_role && (
                        <Tag>{project.project_role}</Tag>
                      )}
                    </div>
                    <div className="section-detail">
                      <b>项目描述：</b>
                      <span>{project.project_desc}</span>
                    </div>
                    <div className="section-detail">
                      <b>主要工作：</b>
                      <span className="project-content">
                        {project.project_content}
                      </span>
                    </div>
                  </div>
                ))}
              </Card>
            </Badge.Ribbon>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default memo(Resume);
