const { Command, flags } = require("@oclif/command");
const axios = require("axios");

class RateCommand extends Command {
  async fetchData(arg) {
    const url = `http://localhost:3001/api/v1/rates?pairs=${arg}`;

    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  async run() {
    const { argv } = this.parse(RateCommand);
    const data = Object.values(await this.fetchData(argv[0]));
    this.log(`${data}`);
  }
}

RateCommand.args = [
  {
    name: "tag",
    description: "filters results by the specified tag",
    required: false,
  },
];

module.exports = RateCommand;
