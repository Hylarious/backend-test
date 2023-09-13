const formatFullname = require('../formatFullname.js');
const expect = require('chai').expect;

describe('formatFullname', () => {
    it('should return an error if "fullName" arg is not a string', () =>{
        expect(formatFullname(undefined)).to.equal('Error');
        expect(formatFullname(42)).to.equal('Error');
        expect(formatFullname({})).to.equal('Error');
        expect(formatFullname([])).to.equal('Error');
        expect(formatFullname(function() {})).to.equal('Error');
    });

    it('should return error if "fullName" length is equal 0', () => {
        expect(formatFullname('')).to.equal('Error');
    });

    it('should return error if "fullName" is something else than "firstname lastname"', () => {
        expect(formatFullname('John Doe Test')).to.equal('Error');
        expect(formatFullname('John')).to.equal('Error');
    })

    it('should return correct "firstName lastName" content if proper arg', () => {
        expect(formatFullname('john doe')).to.equal('John Doe');
        expect(formatFullname('JoHn doE')).to.equal('John Doe');
        expect(formatFullname('JOHN DOE')).to.equal('John Doe');

    })
})