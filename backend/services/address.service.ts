import Address from "../models/address.model";

export const addAddressService = async (
  userId: string,
  data: any
) => {
  const existingAddress =
    await Address.findOne({
      user: userId,
    });

  if (existingAddress) {
    throw new Error(
      "Address already exists. Please update it."
    );
  }

  return await Address.create({
    user: userId,
    ...data,
  });
};

export const getAddressService = async (
  userId: string
) => {
  return await Address.findOne({
    user: userId,
  });
};

export const updateAddressService = async (
  userId: string,
  data: any
) => {
  return await Address.findOneAndUpdate(
    {
      user: userId,
    },
    data,
    {
      new: true,
    }
  );
};