module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '9d27e713f04e85818db4032929e0cadd'),
  },
});
