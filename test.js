import SnowflakePKG from 'snowflake-id';
const Snowflake = SnowflakePKG.default;

const TOS_EPOCH = 1719397184877

// mi dai i milliseoncdi di del 1 gennaio 2012
const first_january_2012 = new Date('2011-01-01').getTime()

const main = async () => {
  const snowflake1 = new Snowflake({
    mid: 1,
    offset: first_january_2012
  });

  const snowflake2 = new Snowflake({
    mid: 2,
    offset: TOS_EPOCH
  });

  const id1 = Number(snowflake1.generate())
  const id2 = Number(snowflake2.generate())

  let a;
}