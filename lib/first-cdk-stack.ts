import { Duration, Stack, StackProps } from "aws-cdk-lib";
import { Construct } from "constructs";
import { Bucket } from "aws-cdk-lib/aws-s3";

export class FirstCdkStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);


    new Bucket(this, "someBucket", {
      lifecycleRules: [
        {
          expiration: Duration.days(2),
        },
      ],
    });
  }
}
