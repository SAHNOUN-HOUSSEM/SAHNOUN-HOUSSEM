import styled from "styled-components";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { cld } from "../../config";
import { thumbnail } from "@cloudinary/url-gen/actions/resize";
import { autoGravity } from "@cloudinary/url-gen/qualifiers/gravity";
import { format, quality } from "@cloudinary/url-gen/actions/delivery";
import { AdvancedImage } from "@cloudinary/react";

const Top = styled.div`
  width: 100%;
  display: flex;
  max-width: 100%;
  gap: 12px;
`;

const ImageStyles = {
  height: "50px",
  borderRadius: "10px",
  marginTop: "4px",
  "@media only screen and (max-width: 768px)": {
    height: "40px",
  },
};

const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Role = styled.div`
  font-size: 18px;
  font-weight: 600px;
  color: ${({ theme }) => theme.text_primary + 99};

  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`;
const Company = styled.div`
  font-size: 14px;
  font-weight: 500px;
  color: ${({ theme }) => theme.text_secondary + 99};

  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;
const Date = styled.div`
  font-size: 12px;
  font-weight: 400px;
  color: ${({ theme }) => theme.text_secondary + 80};

  @media only screen and (max-width: 768px) {
    font-size: 10px;
  }
`;

const Description = styled.div`
  width: 100%;
  font-size: 15px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 99};
  margin-bottom: 10px;
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;
const Span = styled.div`
  display: -webkit-box;
  max-width: 100%;
`;
const Skills = styled.div`
  width: 100%;
  display: flex;
  gap: 12px;
  margin-top: -10px;
`;
const Skill = styled.div`
  font-size: 15px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 99};
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const ItemWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const ExperienceCard = ({ experience }) => {
  const experienceImage = cld
    .image(experience.img)
    .resize(thumbnail().gravity(autoGravity()))
    .delivery(format("auto"))
    .delivery(quality("auto:low"));

  return (
    <VerticalTimelineElement
      icon={
        <AdvancedImage
          cldImg={experienceImage}
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "50%",
            objectFit: "cover",
          }}
        />
      }
      contentStyle={{
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        background: "#1d1836",
        color: "#fff",
        boxShadow: "rgba(23, 92, 230, 0.15) 0px 4px 24px",
        // backdropFilter: "blur(3px) saturate(106%)",
        backgroundColor: "rgba(17, 25, 40, 0.83)",
        border: "1px solid rgba(255, 255, 255, 0.125)",
        borderRadius: "6px",
      }}
      contentArrowStyle={{
        borderRight: "7px solid  rgba(255, 255, 255, 0.3)",
      }}
      date={experience.date}
    >
      <Top>
        {/* <Image src={experience.img} /> */}
        <AdvancedImage cldImg={experienceImage} style={ImageStyles} />
        <Body>
          <Role>{experience.role}</Role>
          <Company>{experience.company}</Company>
          <Date>{experience.date}</Date>
        </Body>
      </Top>
      <Description>
        {experience?.desc && <Span>{experience?.desc}</Span>}
        {experience?.skills && (
          <>
            <br />
            <Skills>
              <b>Skills:</b>
              <ItemWrapper>
                {experience?.skills?.map((skill, index) => (
                  <Skill key={index}>• {skill}</Skill>
                ))}
              </ItemWrapper>
            </Skills>
          </>
        )}
        {experience?.website && (
          <>
            <br />
            <Skills>
              <b>Website:</b>
              <ItemWrapper>
                <Skill>
                  <a
                    href={experience.website}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {experience.website}
                  </a>
                </Skill>
              </ItemWrapper>
            </Skills>
          </>
        )}
      </Description>
    </VerticalTimelineElement>
  );
};
