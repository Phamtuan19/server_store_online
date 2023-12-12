/**
 * "A bit of fragrance clings to the hand that gives flowers!"
 */

/**
 * [POST] - auth/sign-in
 */
const signIn = (req, res) => {
   const body = req.body;

   console.log(body);

   return res.status(200).json({ message: 'Hiii', data: body?.username || null });
};

export { signIn };
