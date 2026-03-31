import dbConnect from "./dbConnect";

export const getData = async (model: any) => {
  await dbConnect();
  const data = await model.find().lean();
  return JSON.parse(JSON.stringify(data));
};
