export const ERROR_MESSAGE_FOR_DELAY = 'timeは0以上で指定してください';

export const delay = async (message: string, time: number) => {
  if (time >= 0) {
    return new Promise((resolve, reject) =>
      setTimeout(() => resolve(message), time)
    );
  }

  throw new Error(ERROR_MESSAGE_FOR_DELAY);
};
