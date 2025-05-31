// Define nominal types using branding

interface MajorCredits {
    credits: number;
    readonly __brand: 'MajorCredits';
}

interface MinorCredits {
    credits: number;
    readonly __brand: 'MinorCredits';
}

// Functions to sum credits

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    return {
        credits: subject1.credits + subject2.credits,
        __brand: 'MajorCredits',
    };
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
    return {
        credits: subject1.credits + subject2.credits,
        __brand: 'MinorCredits',
    };
  }

// Sample data
const major1: MajorCredits = { credits: 10, __brand: 'MajorCredits' };
const major2: MajorCredits = { credits: 15, __brand: 'MajorCredits' };

const minor1: MinorCredits = { credits: 5, __brand: 'MinorCredits' };
const minor2: MinorCredits = { credits: 7, __brand: 'MinorCredits' };

// Log outputs
console.log('Sum of Major Credits:', sumMajorCredits(major1, major2));
console.log('Sum of Minor Credits:', sumMinorCredits(minor1, minor2));