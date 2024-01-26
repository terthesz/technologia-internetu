import z from 'zod';

const requiredError = {
  required_error: 'Všetky políčka musia byť vyplnené.',
};

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

export default z.object({
  name: z
    .string(requiredError)
    .min(3, { message: 'Min. dĺžka je 3' }),
  email: z
    .string(requiredError)
    .email({ message: 'Neplatný email' }),
  phone: z.string(requiredError).refine((str) => {
    if (!str.match(phoneRegex)?.length) return false;
    if (str.startsWith('+') && str.length !== 13)
      return false;
    if (!str.startsWith('+') && str.length !== 10)
      return false;

    return true;
  }),
});
