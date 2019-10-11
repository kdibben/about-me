QUnit.module('MAIN MODULE', {}) 

QUnit.test('TEST calculateInterest', assert => {
    assert.equal(calculateInterest(100, .04, 3), 12, 'Normal Values')
    assert.equal(calculateInterest(500, .025, 8), 100, 'More Normal Values')
    assert.equal(calculateInterest(1000, .067, 10), 670, 'Even More Normal Values')
    assert.equal(calculateInterest(-2500, -.039, -6), -585, 'All Negative Numbers')
    assert.equal(calculateInterest(4000, -.078, 9), -2808, 'One Negative Number')
  });

  QUnit.test('TEST calculateAmount', assert => {
    assert.equal(calculateAmount(250, .028, 5), 285, 'Normal Values')
    assert.equal(calculateAmount(400, .094, 3), 512.8, 'More Normal Values')
    assert.equal(calculateAmount(9000, .066, 1), 9594, 'Even More Normal Values')
    assert.equal(calculateAmount(-1400, -.053, -8), -1993.6, 'All Negative Numbers')
    assert.equal(calculateAmount(800, -.032, 6), 646.4, 'One Negative Number')
  });
