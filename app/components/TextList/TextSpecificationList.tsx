const TextSpecificationList = ({ data }: any) => {
  return (
    <div className="flex flex-col">
      <div className="heading_h6 mb-[20px]">{data.textSubject}</div>
      <div className="grid grid-cols-1 gap-y-[8px]">
        {data?.textContentList.map((each: any, index: any) => {
          return (
            <div className="flex items-center justify-between" key={index}>
              <div className="body_body1">{each.textContentHead}</div>
              <div className="body_body1">{each.textContentBody}</div>
            </div>
          );
        })}
      </div>
      {data.flagShowMore ? (
        <div className="flex  body_showmore text-[#0036C3] mt-[24px] cursor-pointer select-none">
          Show more
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default TextSpecificationList;
