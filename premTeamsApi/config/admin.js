module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '910fef84ae1b431b9858ee262aeb9429'),
  },
});
