//
//  RNConfig.m
//  RNBuildVariants
//
//  Created by Luke Rogerson on 25/02/2021.
//

#import "RNConfig.h"

@implementation RNConfig

RCT_EXPORT_MODULE();

- (NSDictionary *)constantsToExport
{
#if DEV
  NSString *env = @"dev";
  NSString *apiUrl = @"http://www.api.test.dev";
#elif STAGING
  NSString *env = @"staging";
  NSString *apiUrl = @"http://www.api.test.staging";
#else
  NSString *env = @"prod";
  NSString *apiUrl = @"http://www.api.test.prod";
#endif
  
  return @{ @"ENV": env, @"API_URL": apiUrl };
}

+ (BOOL)requiresMainQueueSetup
{
  return YES; // required to initialise native module on main thread
}

@end
